const Button = (props) => {
  //  Write your code here.
  const {class, btnName} = props;
  return (<button className={`${class}`}>{btnName}</button>);
};


const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1 className="heading"> Social Buttons </h1>
    <Button class="like-btn" btnName="Like" />
    <Button class="comment-btn" btnName="Comment" />
    <Button class="share-btn" btnName="Share" />
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
