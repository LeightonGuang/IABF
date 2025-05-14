import {
  Accordion,
  AccordionItem,
  AccordionContent,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";

const page = () => {
  return (
    <section className="flex h-[calc(100dvh-36px)] justify-center">
      <Card className="mt-4 h-max w-3/4">
        <CardContent>
          <Accordion type="multiple">
            <AccordionItem value="organization-1">
              <AccordionTrigger>Organization 1</AccordionTrigger>
              <AccordionContent>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi
                laboriosam molestias, excepturi exercitationem perspiciatis
                nobis odit ab veritatis accusamus, vitae eveniet fuga nam
                similique numquam libero placeat aliquam? Sunt, doloribus?
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="organization-2">
              <AccordionTrigger>Organization 2</AccordionTrigger>
              <AccordionContent>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Quidem, nesciunt earum! Voluptate quod cumque odio id dolorem
                explicabo! Sint mollitia rem vero ipsam debitis commodi
                cupiditate? Laboriosam blanditiis sunt exercitationem!
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="organization-3">
              <AccordionTrigger>Organization 3</AccordionTrigger>
              <AccordionContent>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus deleniti assumenda asperiores, eligendi, facilis
                sunt enim suscipit ipsam illo in cumque perspiciatis commodi
                voluptatum architecto voluptas illum officia, quam velit.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="organization-4">
              <AccordionTrigger>Organization 4</AccordionTrigger>
              <AccordionContent>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Repudiandae, dolorum exercitationem debitis labore quaerat odit,
                veniam sint atque autem quam aspernatur eligendi fugit eum harum
                quos vero fuga, mollitia aliquid.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </section>
  );
};

export default page;
