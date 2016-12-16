import { ChannelResource } from './resources';

export default {
  fetchChannels() {
    return ChannelResource.get().then(response => response.data);
  }
};