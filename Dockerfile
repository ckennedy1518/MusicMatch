# base image to start from
FROM node:16

# set the cwd
WORKDIR MusicMatch

# copy the deps to the cwd
COPY package*.json ./

# run npm install
RUN npm install

# copy source code
COPY . . 

# set and expose the port
ENV PORT=5173
EXPOSE 5173

# for running the docker image
CMD [ "npm", "run", "dev" ]