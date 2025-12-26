import {
  Box,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import FavoriteIcon from "@mui/icons-material/Favorite";

const TopPropertyCard = () => {
  return (
    <Stack className="trend-card-box">
      {/* IMAGE */}
      <Box
        className="card-img"
        style={{
          backgroundImage: `url("/img/banner/types/house.webp")`,
        }}
      >
        <div>$420,000</div>
      </Box>

      {/* INFO */}
      <Box className="info">
        <strong className="title">Run Will Buildings</strong>
        <p className="desc">Seoul Gangnam Apartments</p>

        <div className="options">
          <div>
            <img src="/img/icons/bed.svg" alt="" />
            <span>3 bed</span>
          </div>

          <div>
            <img src="/img/icons/room.svg" alt="" />
            <span>7 rooms</span>
          </div>

          <div>
            <img src="/img/icons/expand.svg" alt="" />
            <span>250 m²</span>
          </div>
        </div>

        <Divider sx={{ mt: "15px", mb: "17px" }} />

        <div className="bott">
          <p>Rent</p>

          <div className="view-like-box">
            <IconButton size="small">
              <RemoveRedEyeIcon fontSize="small" />
            </IconButton>
            <Typography className="view-cnt">120</Typography>

            <IconButton size="small">
              <FavoriteIcon fontSize="small" />
            </IconButton>
            <Typography className="view-cnt">200</Typography>
          </div>
        </div>
      </Box>
    </Stack>
  );
};

export default TopPropertyCard;
