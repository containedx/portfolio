
const LoadingScreen: React.FC = () => {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "#000",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "3rem",
        zIndex: 9999,
        pointerEvents: "none",
      }}
    >
      Loading...
    </div>
  );
};

export default LoadingScreen;
