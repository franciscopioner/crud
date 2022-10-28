import axios, { AxiosResponse } from 'axios';
import {axiosDeleteDragon} from './methods'
import { QueryClient, QueryClientProvider } from 'react-query'
import { vi } from 'vitest'

vi.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('get dragons list', () => {
  it('should return dragons list', async () => {
    const queryClient = new QueryClient()

    //const url = `/api/v1/dragon/${dragonId}`;

    //axiosDeleteDragon(url);

    expect(axios.delete).toHaveBeenCalledWith(axiosDeleteDragon('001'));
  })

  it.skip('should return dragons list', async () => {
    const data = {
      data: [
        {
          createdAt: '2022-10-13T07:44:54.040Z',
          name: 'Toothless',
          type: 'Fire',
          histories: '',
          id: '4',
        },
      ],
    }

    const mockedResponse: AxiosResponse = {
      data: data,
      status: 200,
      statusText: 'OK',
      headers: {},
      config: {},
    };

    mockedAxios.get.mockResolvedValueOnce(mockedResponse);
    expect(axios.get).not.toHaveBeenCalled();
  });
});
