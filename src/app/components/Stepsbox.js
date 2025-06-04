'use client';
import "@/app/globals.css";

export default function StepsBox({ steps }) {
  return (
    <div className="steps-box">
      <h2 className="steps-title">Steps</h2>
      <ol className="steps-list">
        {steps.map((step, index) => (
          <li key={index} className="step-item">
            <span className="step-number">{index + 1}.</span> {step}
          </li>
        ))}
      </ol>
    </div>
  );
}
