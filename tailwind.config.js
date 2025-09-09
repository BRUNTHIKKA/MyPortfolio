tailwind.config = {
    theme:{
        extend:{
            gridTemplateColumns:{
            'auto': 'repeat(auto-fit, minmax(200px, 1fr))'
        },
        fontFamily:{
            Outfit: ["Outfit", "sans-serif"],
            Ovo: ["Ovo", "serif"]
        },
        animation:{
            spin_slow: 'spin 6s linear infinite'
        },
        colors:{
            lightHover: '#fdfcfb',
            darkHover: '#0f0c29',
            darkTheme: '#24243e'
        },
        boxShadow:{
            'black': '4px 4px 0 #000',
            'white': '4px 4px 0 #fff',
        }, 
        backgroundImage: {
          'light-gradient': 'linear-gradient(135deg, #ebebeb, #ffffff)',
          'dark-gradient': 'linear-gradient(135deg, #0f0c29, #302b63, #24243e)'
        },
    }
},
      darkMode: 'selector'  
}