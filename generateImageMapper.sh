#!/bin/bash
echo "const imageMapper = {" > ./imageMapper.js

for file in ./assets/QuestionImages/*; do
  filename=$(basename -- "$file")
  echo "  '$filename': require('./assets/QuestionImages/$filename')," >> ./imageMapper.js
done

echo "};" >> ./imageMapper.js
echo "export default imageMapper;" >> ./imageMapper.js