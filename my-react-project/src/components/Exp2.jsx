import { useState } from 'react'
import './Exp2.css'

const Exp2 = () => {
    const [count, setCount] = useState(0)
    const [step, setStep] = useState(1)

    const handleStepChange = (event) => {
        const value = Number(event.target.value)

        if (Number.isNaN(value)) {
            setStep(1)
            return
        }

        setStep(Math.max(1, value))
    }

    const increment = () => setCount((currentCount) => currentCount + step)

    const decrement = () => {
        setCount((currentCount) => Math.max(0, currentCount - step))
    }

    const reset = () => setCount(0)

    return (
        <main className="counter-page">
            <section className="counter-card" aria-label="Counter application">
                <div className="counter-copy">
                    <h1 className="counter-title">Experiment 3: Counter Application</h1>
                    <p className="counter-subtitle">
                        State management with useState — increment, decrement, reset with custom step.
                    </p>
                </div>

                <div className="counter-display" aria-live="polite">
                    <span className="counter-value">{count}</span>
                </div>

                <label className="counter-step-row" htmlFor="counter-step">
                    <span className="counter-step-label">Step:</span>
                    <input
                        id="counter-step"
                        className="counter-step-input"
                        type="number"
                        min="1"
                        value={step}
                        onChange={handleStepChange}
                    />
                </label>

                <div className="counter-actions">
                    <button type="button" className="counter-button primary" onClick={increment}>
                        Increment
                    </button>
                    <button type="button" className="counter-button" onClick={decrement}>
                        Decrement
                    </button>
                    <button type="button" className="counter-button" onClick={reset}>
                        Reset
                    </button>
                </div>

                <p className="counter-note">Minimum value is 0.</p>
            </section>
        </main>
    )
}

export default Exp2