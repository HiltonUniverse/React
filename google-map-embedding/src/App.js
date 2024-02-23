import './App.css';

function App() {
  return (
    <div className="App">
      <iframe src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d157.29457867952686!2d4.693462407984189!3d50.89201721338006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c160c21fd03307%3A0x3647cc1836917fd9!2sEikenbergstraat%2020%2C%203012%20Leuven!5e0!3m2!1sen!2sbe!4v1708695883852!5m2!1sen!2sbe"}
        title="Google Map Location"
       width="90%"
       height="300"
       style={{border: "2px solid #000000", 
                        borderRadius: "4px"}} 
       allowfullscreen=""
       loading="lazy"
       referrerpolicy={"no-referrer-when-downgrade"}></iframe>

    </div>
  );
}

export default App;
