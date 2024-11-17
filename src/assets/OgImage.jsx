// This is a React component that you can use to generate the OG image
// You'll need to convert it to a JPG for actual use

function OgImage() {
  return (
    <div style={{
      width: '1200px',
      height: '630px',
      background: 'linear-gradient(45deg, #FF66B2, #C8A2C8)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px',
      color: 'white',
      fontFamily: 'Bubblegum Sans, cursive',
    }}>
      {/* Logo */}
      <img src="/logo.svg" alt="Pastelitos" style={{
        width: '400px',
        marginBottom: '40px',
      }} />
      
      {/* Tagline */}
      <h2 style={{
        fontSize: '36px',
        marginBottom: '20px',
        textShadow: '2px 2px 0 #C8A2C8',
      }}>
        Modern Mexican Bakery
      </h2>
      
      {/* Decorative elements */}
      <div style={{
        position: 'absolute',
        top: '20px',
        right: '20px',
        fontSize: '40px',
      }}>
        ✨🦋⭐
      </div>
      
      {/* Sample cake illustration */}
      <div style={{
        position: 'absolute',
        bottom: '40px',
        display: 'flex',
        gap: '20px',
      }}>
        🎂 👰 🎉
      </div>
    </div>
  )
}

export default OgImage 