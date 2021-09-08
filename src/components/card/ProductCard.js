let ProductCard = function (title, imageName, price = 29.99) {
    return (
        <div className="game-card">
            <div
                id="gameImage"
                style={{
                    backgroundImage: `url('${imageName}')`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                }}
            ></div>
            <p>{title}</p>
            <button className="btn">
                {/* <i className="fa fa-cart-plus" aria-hidden="true"></i>$ {price} */}
                <span>
                    <img
                        src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjZmZmZmZmIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWxuczpzZXJpZj0iaHR0cDovL3d3dy5zZXJpZi5jb20vIiB2aWV3Qm94PSIwIDAgMzIgMzIiIHZlcnNpb249IjEuMSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgc3R5bGU9IiIgeD0iMHB4IiB5PSIwcHgiIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMiI+PHBhdGggZD0iTTExLDI0Ljc1Yy0xLjM4LDAgLTIuNSwxLjEyIC0yLjUsMi41YzAsMS4zOCAxLjEyLDIuNSAyLjUsMi41YzEuMzgsMCAyLjUsLTEuMTIgMi41LC0yLjVjMCwtMS4zOCAtMS4xMiwtMi41IC0yLjUsLTIuNVptMTMsMGMtMS4zOCwwIC0yLjUsMS4xMiAtMi41LDIuNWMtMCwxLjM4IDEuMTIsMi41IDIuNSwyLjVjMS4zOCwwIDIuNSwtMS4xMiAyLjUsLTIuNWMtMCwtMS4zOCAtMS4xMiwtMi41IC0yLjUsLTIuNVptLTEzLDJjMC4yNzYsMCAwLjUsMC4yMjQgMC41LDAuNWMwLDAuMjc2IC0wLjIyNCwwLjUgLTAuNSwwLjVjLTAuMjc2LDAgLTAuNSwtMC4yMjQgLTAuNSwtMC41YzAsLTAuMjc2IDAuMjI0LC0wLjUgMC41LC0wLjVabTEzLDBjMC4yNzYsMCAwLjUsMC4yMjQgMC41LDAuNWMtMCwwLjI3NiAtMC4yMjQsMC41IC0wLjUsMC41Yy0wLjI3NiwwIC0wLjUsLTAuMjI0IC0wLjUsLTAuNWMtMCwtMC4yNzYgMC4yMjQsLTAuNSAwLjUsLTAuNVptLTE1LjE1NywtNi41bDE3LjQ1OCwwYzAuODkyLDAgMS42NTQsLTAuNjQ1IDEuOCwtMS41MjVjMC4zMzksLTIuMDMzIDEuMzM0LC04LjAwNCAxLjcyNSwtMTAuMzQ5YzAuMDg4LC0wLjUzIC0wLjA2MSwtMS4wNzEgLTAuNDA4LC0xLjQ4Yy0wLjM0NiwtMC40MSAtMC44NTYsLTAuNjQ2IC0xLjM5MiwtMC42NDZsLTE5LjkxOSwwbC0wLjAzOSwtMC43NDJjLTAuMDY0LC0xLjIxNyAtMC45MTYsLTIuMjUxIC0yLjA5OSwtMi41NDdjLTEuMTcxLC0wLjI5MiAtMi43MjYsLTAuNjgxIC0yLjcyNiwtMC42ODFjLTAuNTM2LC0wLjEzNCAtMS4wNzksMC4xOTIgLTEuMjEzLDAuNzI3Yy0wLjEzNCwwLjUzNiAwLjE5MiwxLjA3OSAwLjcyNywxLjIxM2wyLjcyNywwLjY4MmMwLjMzLDAuMDgyIDAuNTY4LDAuMzcxIDAuNTg2LDAuNzEybDAuODQ0LDE2LjAyN2MwLjA3NywxLjQ2MiAxLjI4NSwyLjYwOSAyLjc1LDIuNjA5bDE1LjgzNiwwYzAuNTUyLDAgMSwtMC40NDggMSwtMWMwLC0wLjU1MiAtMC40NDgsLTEgLTEsLTFsLTE1LjgzNiwtMGMtMC40MDEsMCAtMC43MzIsLTAuMzE0IC0wLjc1MywtMC43MTRsLTAuMDY4LC0xLjI4NlptMTcuODkzLC01LjVsLTQuNzM2LC0wbC0wLDMuNWw0LjE1MywwbDAuNTgzLC0zLjVabS0xMS4yMzYsLTBsLTAsMy41bDQuNSwwbC0wLC0zLjVsLTQuNSwtMFptLTIsMy41bC0wLC0zLjVsLTQuOTQ2LC0wbDAuMTg0LDMuNWw0Ljc2MiwwWm0tNS4wNTEsLTUuNWw1LjA1MSwtMGwtMCwtNC41bC01LjI4OCwwbDAuMjM3LDQuNVptMTAuMjgsLTQuNWwtMy4yMjksMGwtMCw0LjVsNC41LC0wbC0wLC00LjVsLTEuMjcxLDBabTMuMjcxLDBsLTAsNC41bDUuMDcsLTBsMC43NSwtNC41bC01LjgyLDBaIj48L3BhdGg+PC9zdmc+"
                        alt="Cart Icon"
                        width="20px"
                    />
                </span>
                $ {price}
            </button>
        </div>
    );
};

export default ProductCard;
