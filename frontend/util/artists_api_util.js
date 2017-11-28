export const fetchArtist = id => (
  $.ajax({
    url: `/api/artists/${id}`,
    method: 'GET'
  })
);

export const updateArtist = (formData, artistId) => (
  $.ajax({
    url: `/api/artists/${artistId}`,
    method: 'PATCH',
    processData: false,
    contentType: false,
    dataType: 'json',
    data: formData
  })
);
