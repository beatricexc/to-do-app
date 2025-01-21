'use client';

function Form() {
    const handleSubmit = (event) => {
      event.preventDefault();
      // reset the form
      event.target.reset();
    };
    return (
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="todo">
          <input
            type="text"
            name="todo"
            id="todo"
            placeholder="Write your next task"
          />
        </label>
        <button>
        <span className="visually-hidden">Submit</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M12 5v14M5 12h14" />
        </svg>
      </button>
      </form>
    );
  }

export default Form;