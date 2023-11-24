const portfolioDummyData = [
  { img: "portfolio1", webLink: "https://google.com" },
  { img: "portfolio2", webLink: "#" },
  { img: "portfolio3", webLink: "#" }
];

function Blog() {
  return (
    <div className="services" id="Blog">
      <h1>Personal Blog</h1>
      <div className="heading-highlighter div">
        <div></div>
      </div>
      <div className="service-about">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. lorem ipsum
      </div>
      <div className="portfolio-board blog-board">
        {portfolioDummyData.map((val, i) => (
          <div>
            <div>
              <img
                key={i}
                src={require(`./assests/${val.img}.jpeg`)}
                alt={`portfolio ${i + 1}`}
              />
              <div className="vpn-heading">How to prototype in Figma</div>
              <div className="vpn-about mx-2 my-3">July 10, 2023</div>
              <div className="vpn-about">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
              </div>
              <div className="blog-link">
                <a href={val.webLink} target="_blank">
                  Continue Reading
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
