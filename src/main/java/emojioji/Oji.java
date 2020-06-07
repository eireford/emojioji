package emojioji;

import io.micronaut.core.annotation.Introspected;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.ArrayList;

@Introspected
public class Oji {

    @NotBlank
    @NotNull
    private String name;

    @NotNull
    private int[] grid;

    public Oji(String name, int[] grid) {
        this.name = name;
        this.grid = grid;
    }

}
