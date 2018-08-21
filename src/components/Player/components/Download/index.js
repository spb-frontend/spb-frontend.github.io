import React, {Component} from 'react'
import cn from 'classnames'
import axios from 'axios'
import {margin} from './style.module.css'
import {DownloadIcon, FetchingIcon} from './icons'

export class Download extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fetching: false,
      total: 0,
      loaded: 0,
    }
  }

  saveFile = data => {
    const {title, url} = this.props
    const ext = url.split('.').pop()
    const filename = `${title}.${ext}`
    this.setState({fetching: false})
    const blob = new Blob([data], {type: 'audio/mpeg'})
    if (typeof window.navigator.msSaveBlob !== 'undefined') {
      window.navigator.msSaveBlob(blob, filename)
    } else {
      const blobURL = window.URL.createObjectURL(blob)
      const tempLink = document.createElement('a')
      tempLink.style.display = 'none'
      tempLink.href = blobURL
      tempLink.setAttribute('download', filename)
      if (typeof tempLink.download === 'undefined') {
        tempLink.setAttribute('target', '_blank')
      }
      document.body.appendChild(tempLink)
      tempLink.click()
      document.body.removeChild(tempLink)
      window.URL.revokeObjectURL(blobURL)
    }
  }

  fetchFile = () => {
    this.setState({fetching: true})
    axios
      .get(this.props.url, {
        responseType: 'blob',
        onDownloadProgress: ({total, loaded}) => this.setState({total, loaded}),
      })
      .then(({status, data}) => {
        if (status === 200) {
          this.saveFile(data)
        }
      })
      .catch(error => {
        console.error(error) // eslint-disable-line no-console
        this.setState({fetching: false})
      })
  }

  render() {
    const {className} = this.props
    const {fetching, total, loaded} = this.state
    return fetching ? (
      <FetchingIcon
        className={cn(className, margin)}
        loaded={loaded}
        total={total}
      />
    ) : (
      <button className={cn(className, margin)} onClick={this.fetchFile}>
        <DownloadIcon />
      </button>
    )
  }
}
