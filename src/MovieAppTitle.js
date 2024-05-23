function MovieAppTitle() {
    const colors = ['#ff9900', '#ffcc00', '#0099ff', '#33ccff', '#66ffff']; // Array of colors
  
    return (
      <div className="MovieAppTitle">
        <h1 style={{ display: 'flex',   marginLeft:' 40%', marginTop:'4%', fontSize:'50px'}}>
          { 'Movie App'.split('').map((letter, index) => (
            <span key={index} style={{ color: colors[index % colors.length], textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)' }}>
              {letter}
            </span>
          ))}
        </h1>
      </div>
    );
  }

export default MovieAppTitle;