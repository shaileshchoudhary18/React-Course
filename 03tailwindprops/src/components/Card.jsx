import React from 'react'

function Card({username, designation="Engineer"}) {
    console.log(username);
  return (
    <figure class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
  <img class="w-24 h-24 rounded-full mx-auto" src="https://images.pexels.com/photos/29579097/pexels-photo-29579097/free-photo-of-young-woman-photographer-in-istanbul-archway.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="" width="384" height="512"/>
  <div class="pt-6 space-y-4">
    <blockquote>
      <p class="text-lg">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption>
      <div>
        {username}
      </div>
      <div>
        {designation}
      </div>
    </figcaption>
  </div>
</figure>
  )
}

export default Card