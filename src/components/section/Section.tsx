import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => createStyles({}));

interface Props {
  setRef: (el: HTMLElement | null) => void;
  href: string;
  title: string;
}

export default function Section(props: Props) {
  const classes = useStyles();

  return (
    <section id={props.href} ref={props.setRef}>
      <h1>{props.title}</h1>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
        tempus mi vel dignissim egestas. Mauris sit amet ultrices neque. Nullam
        eget lacus vel enim cursus placerat. Fusce iaculis magna nibh, non
        ultrices lacus egestas in. Fusce eu metus orci. Quisque vulputate vitae
        leo id faucibus. Duis vel mi et odio varius finibus sed ut nibh. Nulla
        mauris nisi, posuere vitae enim eget, tincidunt placerat enim. Cras
        interdum est ac lobortis lacinia. Quisque in turpis et metus venenatis
        cursus quis id libero. Pellentesque nec arcu sed ipsum eleifend placerat
        a nec sem. Aenean varius dictum ligula vel condimentum. Vestibulum eget
        ligula sit amet nibh sodales posuere. Phasellus eleifend purus nec quam
        lacinia, ornare bibendum dui ornare. Pellentesque aliquam ligula rutrum
        ex egestas gravida. Aliquam interdum elementum justo, ac elementum
        justo. Cras viverra nulla condimentum ex maximus volutpat. Pellentesque
        habitant morbi tristique senectus et netus et malesuada fames ac turpis
        egestas. Proin aliquet, mi nec faucibus euismod, nunc urna dapibus nibh,
        in malesuada lectus neque quis justo. Nulla ex nisi, aliquam et erat
        molestie, cursus cursus sapien. Donec varius ullamcorper lectus, at
        tristique nisi porta sed. Pellentesque vitae vulputate ante, at accumsan
        turpis. Etiam fringilla orci vel felis pellentesque, sed feugiat justo
        vestibulum. Donec sit amet auctor purus. Nullam hendrerit dolor eu nunc
        hendrerit, id egestas urna luctus. Aliquam erat volutpat. Morbi eget
        posuere diam, sodales suscipit velit. Suspendisse tincidunt pulvinar
        vestibulum. Vivamus sed condimentum justo. Nulla rhoncus venenatis lorem
        sit amet blandit. Suspendisse nisi libero, tincidunt quis lorem id,
        sodales placerat elit. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Etiam bibendum nisl ante, at commodo odio volutpat
        sollicitudin. Ut non nibh et dui lobortis tincidunt hendrerit quis
        tortor. Maecenas vulputate feugiat leo eu luctus. Aenean congue eu nisl
        id iaculis. Etiam luctus et mauris eu sagittis. Nam aliquam tellus sit
        amet justo ornare facilisis. Etiam tincidunt fermentum turpis. Praesent
        venenatis eros urna, non luctus felis venenatis vel. Sed sed lectus
        pulvinar, varius risus eget, tristique leo. Pellentesque a fringilla
        leo. Donec aliquam gravida diam, vestibulum tincidunt ex iaculis ac.
        Donec dapibus elit id volutpat vulputate. Nullam mauris magna, rutrum
        eget metus at, varius fermentum neque. Aenean consequat interdum
        rhoncus. Etiam convallis nisi ac mauris sagittis tincidunt. Nam aliquet
        nisl nec viverra tincidunt. Integer pulvinar quam vel ornare lacinia. Ut
        est ante, mollis ac sagittis eu, interdum aliquet ante. Ut id euismod
        massa. In et porta enim, vitae porttitor purus. Aliquam erat volutpat.
        Etiam massa nunc, dictum ut tortor id, vulputate elementum est. Fusce
        laoreet lectus vel augue fermentum, id finibus eros tristique. Curabitur
        hendrerit risus vel augue sodales mollis. In nunc magna, mollis in odio
        vitae, egestas gravida tellus. Nunc semper nibh non eros venenatis,
        vitae mattis lorem fringilla. Nullam nec sapien neque. Etiam vitae porta
        justo. Curabitur id scelerisque justo, sed lobortis sapien. Sed eget
        urna sit amet dui scelerisque fermentum vel eget lacus. Ut semper
        fringilla suscipit. Donec ex enim, convallis blandit metus vel,
        hendrerit ullamcorper magna. Duis blandit ex sit amet libero tempor, vel
        molestie ex maximus. Nullam quam turpis, cursus a lacinia nec, tempus a
        lorem. Sed condimentum nisl eu malesuada finibus. Vestibulum ut turpis
        ac felis porta pellentesque eu et diam. Nullam fermentum elementum est,
        in dapibus velit. Aliquam erat volutpat. Etiam felis lacus, varius ut
        est et, sollicitudin blandit elit. Nam tempus convallis justo, quis
        gravida neque venenatis eu.
      </div>
    </section>
  );
}
