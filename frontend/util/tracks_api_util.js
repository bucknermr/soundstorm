
export const fetchTracksByPlayCount = (limit) => (
  $.ajax({
    url: 'api/tracks/',
    method: 'GET'
  })
);

export const fetchTrack = (trackId) => (
  $.ajax({
    url: `api/tracks/${trackId}`,
    method: 'GET'
  })
);

export const createTrack = (formData) => (
  $.ajax({
    url: 'api/tracks',
    method: 'POST',
    processData: false,
    contentType: false,
    dataType: 'json',
    data: formData
  })
);

export const updateTrack = (formData, trackId) => (
  $.ajax({
    url: `api/tracks/${trackId}`,
    method: 'PATCH',
    processData: false,
    contentType: false,
    dataType: 'json',
    data: formData
  })
);

export const incrementPlayCount = (trackId) => (
  $.ajax({
    url: `api/tracks/${trackId}/play`,
    method: 'PATCH'
  })
);

export const deleteTrack = (trackId) => (
  $.ajax({
    url: `api/tracks/${trackId}`,
    method: 'DELETE'
  })
);

export const searchTracks = term => (
  $.ajax({
    url: 'api/tracks/search',
    method: 'POST',
    data: { search: { term } }
  })
)
