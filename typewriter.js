const sentence = "hello there from lighthouse labs";

for (const index in sentence) {
  
  setTimeout(() => {
    if (index == sentence.length -1) {
      process.stdout.write(sentence[index] + '\n')
    } else {
      process.stdout.write(sentence[index])
    } 
  }, 50 * index)
  
}
 