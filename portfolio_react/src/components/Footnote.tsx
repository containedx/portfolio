import Typewriter from "./Typewriter";

const thankyounote : string = 
"The End ✨ ";


const Footnote : React.FC = () => {
    return (
        <section
            style={{
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
                alignItems: "center",
                marginTop: "20vh",
                height: "60vh"
            }}>
            <h2 style={{ width: "80vw", maxWidth: "300px" }}>
                <Typewriter text={thankyounote} ></Typewriter>
            </h2>
        </section>
    );
}

export default Footnote;