import express from 'express';
import appRoutes from './routes/index';

const app = express();
const port = process.env.PORT || 5000;

appRoutes(app);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

export default app;
