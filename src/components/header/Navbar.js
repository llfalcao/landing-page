import '../../assets/scss/styles.scss';

let Navbar = (
    <nav id="navbar">
        <div className="company">
            <a href="/" alt="DigiStore - Home">
                <div className="logo-container">
                    <img
                        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTIwMCIgaGVpZ2h0PSIxMjAwIiB2aWV3Qm94PSIwIDAgMTIwMCAxMjAwIj48Y2lyY2xlIHN0cm9rZT0ibm9uZSIgZmlsbD0iI2ZmZmZmZiIgcj0iNDglIiBjeD0iNTAlIiBjeT0iNTAlIj48L2NpcmNsZT48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2MDAgNjAwKSBzY2FsZSgwLjY5IDAuNjkpIHJvdGF0ZSgwKSB0cmFuc2xhdGUoLTYwMCAtNjAwKSIgc3R5bGU9ImZpbGw6IzAwNWFhNyI+PHN2ZyBmaWxsPSIjMDA1YWE3IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTAwIDEwMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PGc+PHBhdGggZD0iTTU0LjYwNyw1OS4wODJoLTIuNzM1Yy0wLjQwMywwLTAuNzMyLDAuMzI5LTAuNzMyLDAuNzMyYzAsMC40MDUsMC4zMjksMC43MzMsMC43MzIsMC43MzNoMi43MzUgICBjMC40MDUsMCwwLjczNC0wLjMyOCwwLjczMy0wLjczM0M1NS4zNDEsNTkuNDExLDU1LjAxMyw1OS4wODIsNTQuNjA3LDU5LjA4MnoiPjwvcGF0aD48Y2lyY2xlIGN4PSI2Ny40ODQiIGN5PSI1OC40MjkiIHI9IjEuNzIxIj48L2NpcmNsZT48cGF0aCBkPSJNMzMuOTMyLDU0LjA1OXYtMi4yNDdjMC0wLjc4Mi0wLjYzNC0xLjQxNi0xLjQxNy0xLjQxNmMtMC43ODMsMC0xLjQxNywwLjYzNC0xLjQxNywxLjQxNnYyLjI0N2gtMi4yNDcgICBjLTAuNzgzLDAtMS40MTgsMC42MzQtMS40MTgsMS40MTdjMCwwLjc4MiwwLjYzNSwxLjQxNiwxLjQxOCwxLjQxNmgyLjI0N3YyLjI0OGMwLDAuNzgyLDAuNjMzLDEuNDE3LDEuNDE3LDEuNDE3ICAgYzAuNzgyLDAsMS40MTctMC42MzUsMS40MTctMS40MTd2LTIuMjQ4aDIuMjQ3YzAuNzgzLDAsMS40MTgtMC42MzMsMS40MTgtMS40MTZzLTAuNjM1LTEuNDE3LTEuNDE4LTEuNDE3SDMzLjkzMnoiPjwvcGF0aD48cGF0aCBkPSJNNDguMTYsNTguOTMxaC0yLjczNmMtMC40MDQsMC0wLjczMiwwLjMyOC0wLjczMiwwLjczM2MwLDAuNDA0LDAuMzI4LDAuNzMxLDAuNzMyLDAuNzMxaDIuNzM2ICAgYzAuNDA1LDAsMC43MzMtMC4zMjcsMC43MzMtMC43MzFDNDguODkzLDU5LjI1OSw0OC41NjQsNTguOTMxLDQ4LjE2LDU4LjkzMXoiPjwvcGF0aD48cGF0aCBkPSJNMzIuNTE2LDQ2LjgwOGMtNC42NzQsMC04LjQ3OCwzLjgwMy04LjQ3OCw4LjQ3OHMzLjgwMyw4LjQ3OSw4LjQ3OCw4LjQ3OXM4LjQ3OC0zLjgwNCw4LjQ3OC04LjQ3OSAgIFMzNy4xOSw0Ni44MDgsMzIuNTE2LDQ2LjgwOHogTTMyLjUxNiw2MS41NDFjLTMuNDQ5LDAtNi4yNTUtMi44MDctNi4yNTUtNi4yNTZjMC0zLjQ1LDIuODA2LTYuMjU1LDYuMjU1LTYuMjU1ICAgYzMuNDUxLDAsNi4yNTUsMi44MDUsNi4yNTUsNi4yNTVDMzguNzcxLDU4LjczNCwzNS45NjYsNjEuNTQxLDMyLjUxNiw2MS41NDF6Ij48L3BhdGg+PGNpcmNsZSBjeD0iNjMuOTY3IiBjeT0iNTQuOTEyIiByPSIxLjcyMiI+PC9jaXJjbGU+PHBhdGggZD0iTTUwLDBDMjIuMzg2LDAsMCwyMi4zODcsMCw1MGMwLDI3LjYxNSwyMi4zODYsNTAsNTAsNTBzNTAtMjIuMzg1LDUwLTUwQzEwMCwyMi4zODcsNzcuNjE0LDAsNTAsMHogTTYzLjc0Miw2OC42MDZIMzYuMjU3ICAgYy05LjEzNSwwLTE2LjYwOS02LjE2Mi0xNi42MDktMTMuNjk1YzAtNy41MzIsNy40NzQtMTMuNjk1LDE2LjYwOS0xMy42OTVoMTEuODIxdi0yLjAyNmgxLjAzNCAgIGMtMC4xODktMC43NDItMC42MTMtMS42ODYtMS41NjQtMi40MzVjLTIuMTY2LTEuNzExLTYuMjQ2LTEuNzM4LTExLjc5NS0wLjA3OWMtMy44NjgsMS4xNTQtNi44NTgsMC45NDQtOC44ODYtMC42MjQgICBjLTIuNjMyLTIuMDMxLTIuNzE1LTUuNjA5LTIuNjc5LTYuNjU4bDEuNDgsMC4wNTJjLTAuMDIxLDAuNjItMC4wMjEsMy43OTIsMi4xMDUsNS40MzVjMS42MywxLjI1OCw0LjE3MSwxLjM4Nyw3LjU1NywwLjM3NiAgIGM2LjEzNy0xLjgzMywxMC41NjYtMS43MTMsMTMuMTYyLDAuMzU1YzEuNDA1LDEuMTIsMS45MzUsMi41NSwyLjEzNSwzLjU4aDEuMjk1djIuMDI2aDExLjgyMmM5LjEzNSwwLDE2LjYwOCw2LjE2NCwxNi42MDgsMTMuNjk0ICAgQzgwLjM1Miw2Mi40NDQsNzIuODc4LDY4LjYwNiw2My43NDIsNjguNjA2eiI+PC9wYXRoPjxwYXRoIGQ9Ik02Ny40ODQsNDYuMjg3Yy00LjY3NSwwLTguNDc5LDMuODAzLTguNDc5LDguNDc5YzAsNC42NzQsMy44MDMsOC40NzgsOC40NzksOC40NzhjNC42NzUsMCw4LjQ3OC0zLjgwNCw4LjQ3OC04LjQ3OCAgIEM3NS45NjIsNTAuMDkxLDcyLjE1OSw0Ni4yODcsNjcuNDg0LDQ2LjI4N3ogTTY3LjQ4NCw2MS4wMmMtMy40NDgsMC02LjI1Ni0yLjgwNi02LjI1Ni02LjI1NWMwLTMuNDUsMi44MDctNi4yNTUsNi4yNTYtNi4yNTUgICBjMy40NSwwLDYuMjU1LDIuODA1LDYuMjU1LDYuMjU1QzczLjczOSw1OC4yMTMsNzAuOTM1LDYxLjAyLDY3LjQ4NCw2MS4wMnoiPjwvcGF0aD48Y2lyY2xlIGN4PSI3MS4wMDEiIGN5PSI1NC45MTMiIHI9IjEuNzIyIj48L2NpcmNsZT48Y2lyY2xlIGN4PSI2Ny40ODQiIGN5PSI1MS4zOTYiIHI9IjEuNzIyIj48L2NpcmNsZT48L2c+PC9zdmc+PC9nPjwvc3ZnPg=="
                        alt="Store Logo"
                        width="100%"
                        height="auto"
                    />
                </div>
            </a>
            <a href="/" alt="DigiStore - Home">
                <p div="company-name">DigiStore</p>
            </a>
        </div>
        <ul>
            <li>
                <a className="nav-btn active" href="#home">
                    Home
                </a>
            </li>
            <li>
                <a className="nav-btn" href="#deals">
                    Deals
                </a>
            </li>
            <li>
                <a className="nav-btn" href="#about">
                    About
                </a>
            </li>
            <li>
                <a className="nav-btn" href="#contact">
                    Contact
                </a>
            </li>
        </ul>
    </nav>
);

export default Navbar;