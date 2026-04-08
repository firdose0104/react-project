import { useState } from 'react'

export const Hook = () => {
	const [count, setCount] = useState(0)

	const increment = () => {
		setCount((current) => current + 1)
        console.log(count);
	}

	const decrement = () => {
		setCount((current) => current - 1)
        console.log(count);
	}
	return (
		<>
			<button onClick={increment}>Increment</button>
			<button onClick={decrement}>Decrement</button>
			<h1>{count}</h1>
		</>
	)

}