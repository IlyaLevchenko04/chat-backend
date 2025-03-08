import { httpServer } from './app';
import { PORT } from './config/env';

httpServer.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
