(function() {
  const TRACKING_ENDPOINT = 'YOUR_SUPABASE_URL';
  const TRACKING_KEY = 'YOUR_SUPABASE_ANON_KEY';
  
  let sessionId = localStorage.getItem('heatmap_session_id') || 
                 crypto.randomUUID();
  localStorage.setItem('heatmap_session_id', sessionId);

  // Check for opt-out
  if (localStorage.getItem('heatmap_opt_out')) {
    return;
  }

  // Initialize Supabase client
  const supabase = createClient(TRACKING_ENDPOINT, TRACKING_KEY);

  // Throttle function
  function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }

  // Track clicks
  document.addEventListener('click', async (e) => {
    const data = {
      session_id: sessionId,
      page_url: window.location.pathname,
      x_percent: (e.pageX / window.innerWidth) * 100,
      y_percent: (e.pageY / window.innerHeight) * 100,
      interaction_type: 'click',
      device_type: getDeviceType(),
      timestamp: new Date(),
    };

    await supabase.from('heatmap_data').insert([data]);
  });

  // Track mouse movement (throttled)
  document.addEventListener('mousemove', throttle(async (e) => {
    const data = {
      session_id: sessionId,
      page_url: window.location.pathname,
      x_percent: (e.pageX / window.innerWidth) * 100,
      y_percent: (e.pageY / window.innerHeight) * 100,
      interaction_type: 'move',
      device_type: getDeviceType(),
      timestamp: new Date(),
    };

    await supabase.from('heatmap_data').insert([data]);
  }, 100));

  // Track scroll depth
  let maxScroll = 0;
  document.addEventListener('scroll', throttle(async () => {
    const scrollPercent = (window.scrollY / 
      (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    
    if (scrollPercent > maxScroll) {
      maxScroll = scrollPercent;
      const data = {
        session_id: sessionId,
        page_url: window.location.pathname,
        x_percent: 100,
        y_percent: scrollPercent,
        interaction_type: 'scroll',
        device_type: getDeviceType(),
        timestamp: new Date(),
      };

      await supabase.from('heatmap_data').insert([data]);
    }
  }, 100));

  function getDeviceType() {
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
      return 'tablet';
    }
    if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
      return 'mobile';
    }
    return 'desktop';
  }
})(); 