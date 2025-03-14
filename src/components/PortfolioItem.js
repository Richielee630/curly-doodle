import React, { useState } from 'react';
import YouTube from 'react-youtube';
import '../styles/PortfolioItem.css';

function PortfolioItem({ item }) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  // Extract YouTube video ID from URL
  const getYoutubeId = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const videoId = getYoutubeId(item.videoURL);
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div className={`portfolio-item ${expanded ? 'expanded' : ''}`}>
      <div className="portfolio-item-header" onClick={toggleExpand}>
        <h2 className="portfolio-item-title">{item.title}</h2>
        <span className="portfolio-item-category">{item.category}</span>
        <span className="expand-icon">{expanded ? '▼' : '►'}</span>
      </div>
      
      {!expanded && (
        <div className="portfolio-item-preview">
          <div className="portfolio-item-thumbnail">
            <img src={item.thumbnailURL} alt={item.title} />
          </div>
          <p className="portfolio-item-snippet">
            {item.description.substring(0, 100)}...
          </p>
        </div>
      )}

      {expanded && (
        <div className="portfolio-item-content">
          <div className="portfolio-item-video">
            {videoId ? (
              <YouTube videoId={videoId} opts={opts} />
            ) : (
              <div className="video-error">Invalid YouTube URL</div>
            )}
          </div>
          <div className="portfolio-item-description">
            <p>{item.description}</p>
          </div>
          <div className="portfolio-item-tags">
            {item.tags && item.tags.map((tag, index) => (
              <span key={index} className="tag">{tag}</span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default PortfolioItem;
