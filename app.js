class Form extends React.Component{
    render() {
        return(
            <form id="survey-form" >
            <div>   
           <label id="name-label" for ="name">Name:</label>
           <input type="text" id="name" name="name" placeholder="Enter your name" required />
            </div>
            <div>
           <label id="email-label" for ="email">Email:</label>
           <input type="email" id="email" name="email" placeholder="Enter your Email"required />
            </div>
            <div>
           <label id="number-label" for="number">Age(from 17 to 70):</label>
           <input type="number" id="number" name="number" min="17" max="70" placeholder="Age "/>
            </div>
            <div>
           <label id="dropdown-label" for="dropdown">Which option best describes your current role?</label>
           <select id="dropdown" name="dropdown" >
              <option value="select-role" disabled selected>Select current role</option>
              <option value="student">Student</option>
              <option value="full-time-job">Full Time Job</option>
              <option value="full-time-learner">Full Time learner</option>
              <option value="prefer-not-say">Prefer not to say</option>
              <option value="other">Other</option>
           </select>
           </div>
           <div>
           <label for="recommendation">Would you recommend freeCodeCamp to a friend?</label>
           <div id="recommendation">
           <input type="radio" id="definitely" name="recommendation" value="definitely" checked />
           <label for="defnitely"> Defnitely</label>
           <input type="radio" id="maybe" name="recommendation" value="maybe" />
           <label id="maybe-label" for="maybe" >Maybe</label>
           <input type="radio" id="not-sure" name="recommendation" value="not sure" />
           <label for="not-sure"> Not sure</label>
            </div>
            </div>
            <div>
            <label id="dropdown-label" for="dropdown">What is your favorite feature of freeCodeCamp?</label>
            <select id="dropdown" name="dropdown" >
                   <option value="select-option" disabled selected >Select an option</option>
                   <option value="challenges">Challenges</option>
                   <option value="projects">Projects</option>
                   <option value="community">Community</option>
                   <option value="open-source">Open Source</option>
                </select>
           </div>
           <div>
                <label for="improved">What would you like to see improved?(check all that apply) </label>
                <div id="improved">
                    <input type="checkbox" id="front-end" name="front-end" value="front end projects" />
                    <label for="front-end">Front-end Projects</label>
                    <input type="checkbox" id="back-end" name="back-end" value="back end projects"/>
                    <label for="back-end">Back-end Projects</label>
                    <input type="checkbox" id="data-vis" name="data-vis" value="data visualization"/>
                    <label for="data-vis">Data Visuaization</label>
                    <input type="checkbox" id="challenges" name="challenges" value="challenges"/>
                    <label for="challenges">Challenges</label>
                    <input type="checkbox" id="open-source" name="open-source" value="open source community"/>
                    <label for="open-source">Open Source Community</label>
                    <input type="checkbox" id="gitter-help" name="gitter-help" value="gitter help rooms"/>
                    <label for="gitter-help">Gitter help rooms</label>
                    <input type="checkbox" id="videos" name="videos" value="videos"/>
                    <label for="videos">Videos</label>
                    <input type="checkbox" id="city-meetups" name="city-meetups" value="city-meetups"/>
                    <label for="city-meetups">City Meetups</label>
                    <input type="checkbox" id="wiki" name="wiki" value="wiki" />
                    <label for="wiki">Wiki</label>
                    <input type="checkbox" id="forum" name="forum" value="forum"/>
                    <label for="forum">Forum</label>
                    <input type="checkbox" id="add-courses" name="add-courses" value="add-courses"/>
                    <label for="add-courses">Additional Courses</label>
                </div>
           </div>
         
           <div>
                <label for="comments">Any comments or suggestions?</label>
                <textarea id="comments" placeholder="Enter your comment here..." rows="5"></textarea>
            </div>
       
                <input type="submit" id="submit" name="Submit"/>
       
           </form>
        );
    }
}

class Servey extends React.Component {
    render() {
    return(
   <div>
    <h1 id="title" >Survey Form</h1>
    <p id ="description" >Thank you for taking the time to help us improve the platform</p>
    <Form />
    </div>
    );
    }
}
ReactDOM.render(<Servey />, document.getElementById("root"));