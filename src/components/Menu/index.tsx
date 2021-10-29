import React, { useState } from 'react'

const Menu = () => {
	const [scrolled, setScrolled] = useState(false)

	return (
		<>
			<div className={scrolled ? 'menu scrolled' : 'menu'}>
                <button className='buttons btn' onClick={() => setScrolled(!scrolled)}>Teste</button>
                <button className='buttons btn' onClick={() => setScrolled(!scrolled)}>Teste</button>
                <button className='buttons btn' onClick={() => setScrolled(!scrolled)}>Teste</button>
                <button className='buttons btn' onClick={() => setScrolled(!scrolled)}>Teste</button>
                <button className='buttons btn' onClick={() => setScrolled(!scrolled)}>Teste</button>
			</div>
        </>
	)
}

export default Menu
