import { makeApiRequest } from '../../utils/api/apiRequest';
import { VENUES_ENDPOINT } from '../../utils/api/constants';

export async function fetchVenueDetails(id) {
  try {
    const endpoint = `${VENUES_ENDPOINT}/${id}`; 
    const response = await makeApiRequest(endpoint);
    return response;
  } catch (error) {
    console.error('Error fetching venue details:', error);
    throw error;
  }
}
