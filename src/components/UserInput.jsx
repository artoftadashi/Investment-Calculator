export default function ({ onChange, input }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>initial investment</label>
          <input
            type="number"
            required
            value={input.initialInvestment}
            onChange={(event) => {
              onChange("initialInvestment", event.target.value);
            }}
          />
        </p>
        <p>
          <label>annual investment</label>
          <input
            type="number"
            required
            value={input.annualInvestment}
            onChange={(event) => {
              onChange("annualInvestment", event.target.value);
            }}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>expected return</label>
          <input
            type="number"
            required
            value={input.expectedReturn}
            onChange={(event) => {
              onChange("expectedReturn", event.target.value);
            }}
          />
        </p>
        <p>
          <label>duration</label>
          <input
            type="number"
            required
            value={input.duration}
            onChange={(event) => {
              onChange("duration", event.target.value);
            }}
          />
        </p>
      </div>
    </section>
  );
}
