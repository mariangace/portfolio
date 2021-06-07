import React, { Component } from 'react';

class About extends Component {
  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var profilepic = 'images/' + this.props.data.image;
      var bio = this.props.data.bio;
      var description = this.props.data.description;
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id='about'>
        <div className='row'>
          <div className='profile-div'>
            <h1>About me</h1>
            <img className='profile-pic' src={profilepic} alt='Profile' />
          </div>
          <div className='description'>
            <h3>{name}</h3>
            <p>
              {bio} <br></br> {description}
            </p>
            <p className='donwload'>
              <a href={resumeDownload} className='button'>
                <i className='fa fa-download'></i>Download Resume
              </a>
            </p>
          </div>
          <div className='description-div'></div>
        </div>
      </section>
    );
  }
}

export default About;
