package emojioji;

import io.micronaut.core.annotation.Introspected;

import javax.validation.constraints.Max;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.function.BiFunction;

@Introspected
public class Oji {

    @NotBlank
    @NotNull
    private String name;

    private int[][] grid;
    private ArrayList<Emoji> legend;


    public Oji(String name, int[][] grid) {
        this.name = name;
        this.grid = grid;
    }

    public String getName() {
        return name;
    }

    public int[][] getGrid() {
        return grid;
    }

    public ArrayList<Emoji> getLegend() { return legend; }
}
