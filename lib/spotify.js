const getAccessToken = async () => {
  const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

  const response = await fetch(`${process.env.SPOTIFY_TOKEN_ENDPOINT}`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from(
        `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
      ).toString("base64")}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token,
    }),
    next: {
      revalidate: 3600,
    },
  });

  return response.json();
};

export const getTopTracks = async () => {
  const { access_token } = await getAccessToken();

  return fetch(`${process.env.GET_TOP_TRACKS_ENDPOINT}`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

export const currentlyPlayingSong = async () => {
  const { access_token } = await getAccessToken();

  try {
    return fetch(`${process.env.CURRENTLY_PLAYING_TRACK_ENDPOINT}`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
    cache:"no-cache",
  });
  } catch (error) {
    return {isPlaying:false}
  }
};
