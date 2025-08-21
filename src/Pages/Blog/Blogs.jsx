import React from 'react';

const Blogs = () => {
    return (
        <div className='my-20'>
            
            <div className="join join-vertical bg-base-100">
  <div className="collapse collapse-arrow join-item border-base-300 border">
    <input type="radio" name="my-accordion-4" defaultChecked />
    <div className="collapse-title font-semibold">1. What is useState and how does it work in React?</div>
    <div className="collapse-content text-sm">useState is a React Hook that lets you add state (data that can change) to functional components.

*It returns two things:

1.The current state value

2.A function to update that state</div>
  </div>
  <div className="collapse collapse-arrow join-item border-base-300 border">
    <input type="radio" name="my-accordion-4" />
    <div className="collapse-title font-semibold">2. What is the purpose of useEffect in React?</div>
    <div className="collapse-content text-sm">useEffect lets you perform side effects in React components.

Side effects = Anything outside the rendering process (e.g. fetching data, setting up event listeners, updating the DOM, timers).</div>
  </div>
  <div className="collapse collapse-arrow join-item border-base-300 border">
    <input type="radio" name="my-accordion-4" />
    <div className="collapse-title font-semibold">3. What is a custom hook in React and when should you use one?</div>
    <div className="collapse-content text-sm">A custom hook is basically a function that starts with use and uses other React hooks inside.

It allows you to reuse logic across multiple components.</div>
  </div>
    <div className="collapse collapse-arrow join-item border-base-300 border">
    <input type="radio" name="my-accordion-4" />
    <div className="collapse-title font-semibold">4.Difference between controlled and uncontrolled components. Which one is better?</div>
    <div className="collapse-content text-sm">
        Controlled Component:

1.The form input’s value is controlled by React state.

2.You use value and onChange.
Uncontrolled Component:

1.The input value is handled by the DOM itself.

2.You use ref to get the value.

</div>
  </div>
    <div className="collapse collapse-arrow join-item border-base-300 border">
    <input type="radio" name="my-accordion-4" />
    <div className="collapse-title font-semibold">5. Tell us something about useFormStatus() in React.</div>
    <div className="collapse-content text-sm">useFormStatus() is a React Hook (introduced in React 18 with server actions & form handling).

It is used inside a form to get the current status of the form submission.

It tells you things like:

Is the form submitting?

Did it succeed?

Did it fail?</div>
  </div>
</div>

        </div>
    );
};

export default Blogs;