<?php

interface Toy {
    public function play(): string;
}

abstract class Car implements Toy {
    public function play() : string {
        return "Play Car";
    }
}

class LittleCarToy extends Car {
    public function play(): string {
        return "Play Little Car";
    }
}

class MiddleCarToy extends Car {
    public function play(): string {
        return "Play Middle Car";
    }
}

abstract class Doll implements Toy {
    public function play(): string {
        return "Play Doll";
    }
}

class LittleDollToy extends Doll {
    public function play(): string {
        return "Play Little Doll";
    }
}

class MiddleDollToy extends Doll {
    public function play(): string {
        return "Play Middle Doll";
    }
}

interface ToyFactory {
    public function makeForKids(): Toy;
    public function makeForChild(): Toy;
}

 class CarFactory implements ToyFactory {
    public function makeForChild(): Toy
    {
        return new LittleCarToy();
    }

    public function makeForKids(): Toy
    {
        return new MiddleCarToy();
    }
 }

 class DollFactory implements ToyFactory {
    public function makeForChild(): Toy
    {
        return new LittleDollToy();
    }

    public function makeForKids(): Toy
    {
        return new MiddleDollToy();
    }
 }

abstract class AbstractToyFactory {
    public static function makeToy(ToyFactory $factory, string $type) : Toy {
        if ('child' === $type) {
            return $factory->makeForChild();
        }

        return $factory->makeForKids();
    }
}

$myToy = AbstractToyFactory::makeToy(new CarFactory(), "child");
var_dump($myToy);die();
$myToy.play();
