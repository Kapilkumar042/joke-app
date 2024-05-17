import React, { useState } from 'react'; // Import React and useState
import { LoaderFunction } from '@remix-run/node';
import Counter from '../../../../reactproject/techapp/src/App'; // Assuming 'Counter' is your React component

export let loader: LoaderFunction = async ({ request }) => {
  return { request }; // Return an object with the 'request' property
};

export default function CounterRoute() {
  return (
    <div>
      <h1>Counter Example</h1>
      <Counter /> {/* Render your React component here */}
    </div>
  );
}