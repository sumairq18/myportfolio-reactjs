import '../../style/Timeline.css';
import React, { Component } from 'react';

const TimelineItem = ({ data }) => {
  return (
    <div className="timeline-item">
      <div className="timeline-item-content">
        <span className="tag" style={{ background: data.category.color }}>
          {data.category.tag}
        </span>
        <time>Joined</time>
        <time>{data.date}</time>
        <h4>{data.heading}</h4>
        <h6><u>{data.subheading}</u></h6>
        <p>{data.text}</p>
        <span className='duration'>{data.duration}</span>
        {data.link && (
          <a
            href={data.link.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {data.link.text}
          </a>
        )}
        <span className="circle" />
      </div>
    </div>
  );
}

export default TimelineItem;