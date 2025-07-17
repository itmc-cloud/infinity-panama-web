// News Service for fetching music-related news
const NEWS_SOURCES = {
  // Free RSS feeds for music news
  rssFeeds: [
    'https://www.billboard.com/c/latin/feed/',
    'https://rss.cnn.com/rss/edition.rss',
    'https://feeds.feedburner.com/LatinMusic'
  ],
  
  // Alternative free news APIs
  currentsAPI: 'https://api.currentsapi.services/v1/search',
  newsDataAPI: 'https://newsdata.io/api/1/news',
  
  // CORS proxy for RSS feeds
  corsProxy: 'https://api.allorigins.win/get?url='
};

const MUSIC_KEYWORDS = [
  'música latina', 'reggaeton', 'salsa', 'bachata', 'merengue', 'cumbia',
  'música española', 'pop latino', 'rock español', 'baladas románticas',
  'música tropical', 'artistas latinos', 'conciertos', 'festivales música'
];

export const fetchMusicNews = async () => {
  try {
    // Try to fetch from a free news API first
    const newsData = await fetchFromFreeNewsAPI();
    if (newsData && newsData.length > 0) {
      return formatNewsData(newsData);
    }

    // Fallback to RSS feeds
    const rssData = await fetchFromRSSFeeds();
    if (rssData && rssData.length > 0) {
      return formatNewsData(rssData);
    }

    // Final fallback to mock data
    return getFallbackNews();
  } catch (error) {
    console.log('Error fetching news:', error);
    return getFallbackNews();
  }
};

const fetchFromFreeNewsAPI = async () => {
  try {
    // Using a free tier API (you would replace this with actual API key)
    const keyword = MUSIC_KEYWORDS[Math.floor(Math.random() * MUSIC_KEYWORDS.length)];
    
    // Example with NewsData.io (free tier available)
    const response = await fetch(
      `${NEWS_SOURCES.newsDataAPI}?apikey=YOUR_API_KEY&q=${encodeURIComponent(keyword)}&language=es&size=10`
    );

    if (response.ok) {
      const data = await response.json();
      return data.results || [];
    }
  } catch (error) {
    console.log('Free news API failed:', error);
  }
  return null;
};

const fetchFromRSSFeeds = async () => {
  try {
    const feedUrl = NEWS_SOURCES.rssFeeds[Math.floor(Math.random() * NEWS_SOURCES.rssFeeds.length)];
    const response = await fetch(NEWS_SOURCES.corsProxy + encodeURIComponent(feedUrl));
    
    if (response.ok) {
      const data = await response.json();
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(data.contents, 'text/xml');
      const items = xmlDoc.querySelectorAll('item');
      
      return Array.from(items).slice(0, 6).map(item => ({
        title: item.querySelector('title')?.textContent || 'Noticia Musical',
        description: item.querySelector('description')?.textContent?.replace(/<[^>]*>/g, '') || 'Lee más detalles...',
        link: item.querySelector('link')?.textContent || '#',
        pubDate: item.querySelector('pubDate')?.textContent || new Date().toISOString(),
        source: 'RSS Feed'
      }));
    }
  } catch (error) {
    console.log('RSS feed failed:', error);
  }
  return null;
};

const formatNewsData = (newsArray) => {
  return newsArray.slice(0, 6).map((article, index) => {
    const publishDate = new Date(article.pubDate || article.published_at || Date.now() - (index * 60 * 60 * 1000));
    
    return {
      title: article.title || 'Noticia Musical',
      summary: (article.description || article.content || 'Lee más detalles en el artículo completo.').substring(0, 150) + '...',
      time: formatTimeAgo(publishDate),
      category: getCategoryFromContent((article.title || '') + ' ' + (article.description || '')),
      url: article.link || article.url || '#',
      source: article.source || 'Noticias Musicales'
    };
  });
};

const formatTimeAgo = (date) => {
  const now = new Date();
  const diffInHours = Math.floor((now - date) / (1000 * 60 * 60));
  
  if (diffInHours < 1) return 'Hace menos de 1 hora';
  if (diffInHours === 1) return 'Hace 1 hora';
  if (diffInHours < 24) return `Hace ${diffInHours} horas`;
  
  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays === 1) return 'Hace 1 día';
  return `Hace ${diffInDays} días`;
};

const getCategoryFromContent = (content) => {
  const categories = {
    'reggaeton': 'Reggaetón',
    'salsa': 'Salsa',
    'bachata': 'Bachata',
    'merengue': 'Merengue',
    'cumbia': 'Cumbia',
    'ranchera': 'Ranchera',
    'balada': 'Baladas',
    'rock': 'Rock en Español',
    'pop': 'Pop Latino',
    'clásica': 'Clásicos',
    'romántica': 'Románticas',
    'tropical': 'Tropical',
    'festival': 'Festivales',
    'concierto': 'Conciertos'
  };
  
  const lowercaseContent = content.toLowerCase();
  for (const [keyword, category] of Object.entries(categories)) {
    if (lowercaseContent.includes(keyword)) {
      return category;
    }
  }
  return 'Música';
};

const getFallbackNews = () => {
  const baseDate = new Date();
  
  return [
    {
      title: 'Festival de Música Latina 2025 en Ciudad de Panamá',
      summary: 'El mayor evento musical del año reunirá a los mejores artistas del género tropical, salsa y reggaetón en el Estadio Nacional.',
      time: formatTimeAgo(new Date(baseDate.getTime() - 2 * 60 * 60 * 1000)),
      category: 'Festivales',
      url: '#',
      source: 'Infinity Radio'
    },
    {
      title: 'Los Grandes Clásicos de la Salsa que Marcaron Historia',
      summary: 'Recordamos las canciones inmortales de Héctor Lavoe, Willie Colón y otros ícones que definieron el sonido de la salsa.',
      time: formatTimeAgo(new Date(baseDate.getTime() - 4 * 60 * 60 * 1000)),
      category: 'Clásicos',
      url: '#',
      source: 'Infinity Radio'
    },
    {
      title: 'Nueva Generación del Reggaetón Panameño Conquista Charts',
      summary: 'Jóvenes artistas panameños están revolucionando el género urbano con propuestas frescas que mezclan tradición y modernidad.',
      time: formatTimeAgo(new Date(baseDate.getTime() - 6 * 60 * 60 * 1000)),
      category: 'Reggaetón',
      url: '#',
      source: 'Infinity Radio'
    },
    {
      title: 'Baladas Románticas: El Género que Nunca Pasa de Moda',
      summary: 'Las canciones de amor interpretadas por Marco Antonio Solís, José José y otros románticos siguen enamorando a nuevas generaciones.',
      time: formatTimeAgo(new Date(baseDate.getTime() - 8 * 60 * 60 * 1000)),
      category: 'Románticas',
      url: '#',
      source: 'Infinity Radio'
    },
    {
      title: 'El Resurgimiento de la Cumbia en la Música Contemporánea',
      summary: 'La cumbia colombiana y mexicana vuelve con fuerza en las nuevas producciones musicales y colaboraciones internacionales.',
      time: formatTimeAgo(new Date(baseDate.getTime() - 12 * 60 * 60 * 1000)),
      category: 'Cumbia',
      url: '#',
      source: 'Infinity Radio'
    },
    {
      title: 'Homenaje a las Grandes Voces de la Música Ranchera',
      summary: 'Vicente Fernández, Pedro Infante y otros ícones del mariachi que hicieron grande el género ranchero mexicano.',
      time: formatTimeAgo(new Date(baseDate.getTime() - 24 * 60 * 60 * 1000)),
      category: 'Ranchera',
      url: '#',
      source: 'Infinity Radio'
    }
  ];
};

export default { fetchMusicNews };
