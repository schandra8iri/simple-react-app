### Simple React App

## Create react app

```sh
    npx create-react-app simple-react-app
    cd simple-react-app
    npm start
```

## Create components

Create a dir sr/components

Create a file src/components/Greeting1.js, and add below code :

```js
import React, { Component } from "react";

class Greeting1 extends Component {
  render() {
    return (
      <div className="Greeting">
        <h1>Good Morning - G1</h1>
      </div>
    );
  }
}
```

Export the new component

```js
export default Greeting1;
```

Other ways of creating component

```js
import React, { Component } from "react";

function Greeting2() {
  return (
    <div className="Greeting2">
      <h1>Good Morning - G2</h1>
    </div>
  );
}

export default Greeting2;
```

and

```js
import React, { Component } from "react";

const Greeting3 = () => {
  return (
    <div className="Greeting3">
      <h1>Good Morning - G3</h1>
    </div>
  );
};

export default Greeting3;
```

# Note

- the JSX syntax
-

## Props

Remove the Greeting1 and Greeting2 from app.js

Pass an attribute called time with a value in Greeting3 tag

```js
<Greeting3 time="Morning" />
```

Add an argument called props to the Greeting component

```js
const Greeting3 = (props) => {
```

Use props to fetch properties passed

```js
<h1>Good {props.time}</h1>
```

now the Greeting message will change as per the value passed

### State

Use the class instead of function component, like Greeting1 in our case

access the prod as this.props, where this refers to class

```js
<h1>Good {this.props.time} - G1</h1>
```

Change the greeting3 to greeting1 in app.js, see if it works

Add a constructor to the class and assign the props value to state object

```js
  constructor(props) {
    super(props);
    this.state = { time: props.time };
  }
```

Based on events state can be updated using setState() function

Ex refresh on time intervals

```js
  componentDidMount() {
    this.timerID = setInterval(() => this.refreshGreeting(), 10000);
  }

  refreshGreeting() {
    this.setState((state, props) => ({
      time: props.time,
    }));
  }
```

# NOte

- React load only the component whoes state is changes
- Only the part of the state can alsoe be changed
- Reacts Creats a Virtual DOM, with states and compare with the one rendered and updated

### use state

react hooks - stat manuplication
Functional Component

use hooks called useState to update the state

```js
const [timeState, refreshTimeState] = useState({
  time: props.time,
});
```

Use another hook called useEffect to trigger update

```js
useEffect(() => {
  setInterval(() => refreshGreeting(), 10000);
});
```

define the function to update the state

```js
const refreshGreeting = () => {
  refreshTimeState({
    time: props.time,
  });
};
```
