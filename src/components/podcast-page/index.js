import React, { Component } from 'react'
import styles from './style.module.css'
import Link from 'gatsby-link'

class PodcastPage extends Component {

  constructor(props) {
    super(props)

    const {node} = props.pathContext.data;

    this.data = node.frontmatter;
    this.showNotes = node.html;
  }

  render() {

    var disqus_config = function () {
      this.page.url = `/podcast/${this.props.pathContext.id}`;
      this.page.identifier = `/podcast/${this.props.pathContext.id}`;
    };

    (function() { // DON'T EDIT BELOW THIS LINE
      var d = document, s = d.createElement('script');
      s.src = 'https://http-spb-frontend-ru.disqus.com/embed.js';
      s.setAttribute('data-timestamp', +new Date());
      (d.head || d.body).appendChild(s);
    })();

    return (
      <div>
        <div className={styles.back_link}>
          <Link
            to='/podcast/'>
            {'<'} назад
          </Link>
        </div>

        <header className={styles.header}>
          <h3 className={styles.header_title}>
            {this.data.title}
          </h3>
          <date className={styles.header_date}>{this.data.date}</date>
        </header>

        <audio
          className={styles.audio}
          controls='controls'
          preload='none'
          src={this.data.link} />

        <footer
          className={styles.footer}
          dangerouslySetInnerHTML={{ __html: this.showNotes }} />

        <div id="disqus_thread"></div>
      </div>
    )
  }
}

export default PodcastPage
