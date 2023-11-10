
function Footer() {
  return (
    <div className="footer">
      <div className="map">
        <img src={require(`./assests/mapImg.png`)} />
      </div>
      <div className="footer-logos">
        <img src={require(`./assests/FooterImg1.png`)} />
        <img src={require(`./assests/FooterImg2.png`)} />
        <img src={require(`./assests/FooterImg3.png`)} />
        <img src={require(`./assests/FooterImg4.png`)} />
      </div>
      <div className='rights'>
        2021 All Rights Reserved.Ojjomedia
      </div>
    </div>
  );
}

export default Footer;