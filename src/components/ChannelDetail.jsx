import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { Videos, ChannelCard } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = () => {
  const { id } = useParams();
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  console.log(channelDetail, videos);

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) => {
      setChannelDetail(data?.items[0]);
    });

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => {
        setVideos(data?.items);
      }
    );
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(86,15,148,1) 54%, rgba(86,19,159,1) 74%, rgba(158,0,255,1) 100%)",
            zIndex: 10,
            height: "300px",
          }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop={"-110px"} />
      </Box>
      <Box display="flex" p="2">
        <Box sx={{ mr: { sm: "100px" } }} />
          <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
