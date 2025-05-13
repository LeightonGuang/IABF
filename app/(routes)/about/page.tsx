import { Card, CardContent, CardHeader } from "@/components/ui/card";

const page = () => {
  return (
    <section className="flex h-[calc(100dvh-36px)] flex-col items-center justify-center">
      <Card className="w-3/4 p-6">
        <CardHeader>
          <h1 className="text-xl">About</h1>
        </CardHeader>

        <CardContent>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
            laborum ea odit nobis dolore totam doloribus perferendis in deleniti
            explicabo, nulla veritatis perspiciatis repellendus quisquam itaque
            ducimus maxime, amet libero officia et beatae molestiae porro
            consectetur. Repellendus deserunt recusandae deleniti maxime cum
            sint! Quisquam molestias facere inventore dolor, maxime neque
            placeat hic blanditiis sapiente ipsam, sequi voluptatum doloribus
            enim. Cupiditate accusantium cum minus repellendus neque qui
            recusandae laboriosam quaerat similique officiis harum, repudiandae,
            dolores, ratione quod aut sapiente quae eligendi tempora? Sapiente
            autem, itaque provident magni ducimus nostrum vero tempore error,
            officia corrupti hic et, fugiat nihil est veritatis eos laborum
            porro. Voluptatibus qui culpa in sapiente provident maxime, sequi
            expedita iste corrupti illum! Harum autem et amet voluptate
            deleniti, modi incidunt qui eius fugit rem tempore praesentium,
            excepturi molestias distinctio eligendi? Placeat cupiditate soluta
            enim nihil accusamus voluptate harum, hic odit doloribus facilis
            saepe rem sapiente ratione odio temporibus eveniet, numquam totam
            incidunt? Facilis, consectetur optio quae quis et, omnis iste maxime
            quos praesentium aspernatur autem sit neque suscipit dignissimos
            dolore eum cumque dicta ipsam asperiores quasi voluptatibus
            excepturi vero esse earum? Ipsam reiciendis saepe, iure itaque
            dolorum adipisci voluptate veritatis aut. Perferendis non, inventore
            voluptatum sunt nam culpa.
          </p>
        </CardContent>
      </Card>
    </section>
  );
};

export default page;
