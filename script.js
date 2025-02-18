function handleNavigationLinks() {
    // Liste des chemins à surveiller
    const paths = ['/mona', '/calendar', '/nomad'];
    const currentPath = window.location.pathname;
    
    // Pour chaque chemin, on trouve les liens associés et on les gère
    paths.forEach(path => {
      const links = document.querySelectorAll(`a[href^="${path}"]:not(.card)`);
      
      // Si on est sur un des chemins surveillés, on montre uniquement ses liens associés
      const shouldShowLinks = currentPath.startsWith(path);
      
      links.forEach(link => {
        link.style.display = shouldShowLinks ? '' : 'none';
      });
    });
  }
  
  if (typeof window !== 'undefined') {
    handleNavigationLinks();
  
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
          handleNavigationLinks();
        }
      });
    });
  
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }