import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { logo } from "../utils/index";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      sx={{
        position: "sticky",
        background: "#000",
        justifyContent: "space-between",
        p: 2
      }}
    >
      <Link to="/" style={{display: "flex", alignItems: "center"}}>
        <img src={logo} alt="" height={45} />
      </Link>

      <SearchBar />
    </Stack>
  );
};

export default Navbar;
