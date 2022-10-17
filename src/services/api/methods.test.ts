import axios, { AxiosResponse } from 'axios';

vi.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('get dragons list', () => {
  test('should return dragons list', async () => {
    const dragons: any = [
      {
        createdAt: "2022-10-13T07:44:54.040Z",
        name: "Toothless",
        type: "Fire",
        histories: "",
        id: "4"
      },
    ];
    const mockedResponse: AxiosResponse = {
      data: dragons,
      status: 200,
      statusText: 'OK',
      headers: {},
      config: {},
    };

    mockedAxios.get.mockResolvedValueOnce(mockedResponse);
    expect(axios.get).not.toHaveBeenCalled();
  });
});
