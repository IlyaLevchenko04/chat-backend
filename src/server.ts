import { httpServer } from './app';
import { PORT } from './config/env';

httpServer.listen(PORT || 3000, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
