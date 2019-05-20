const header = <h1 className="title">Hello on this website</h1>

const classBig="big";
const handleClick=()=>alert("click!");

const main=(
    <div>
        <h1 onClick={()=>alert("yououi")} className='red'>First article</h1>
        <p onClick={handleClick}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe repellat vel ex itaque cumque atque labore, voluptate perferendis dolore optio qui ab ullam porro, voluptas temporibus nemo repudiandae odio obcaecati?</p>
    </div>
)

const txt="Footer";
const footer =(
<footer>
    <p className={classBig}>{txt}</p>
</footer>
)

const app=[header, main, footer]

ReactDOM.render(app,document.getElementById('root'));